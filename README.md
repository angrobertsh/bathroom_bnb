##Bathroom BnB

[Bathroom BnB live](http://bathroom-bnb.herokuapp.com/)

Bathroom BnB is a full stack web application that shows the best places to make. It utilizes Ruby on Rails on the backend, a PostgreSQL database, the Google Maps API, and React.js with a Redux architectural framework on the frontend.

###Features and Implementation

####Single-Page App

Bathroom BnB uses React and Redux to make AJAX calls to dynamically render map markers and other input pages. Navigation occurs without multiple full http requests and content is queried and populated smooth rendering, thanks to the many React components which dispatch actions through the React Router.

```javascript
<Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
  <Route path="/" component={ App }>
    <IndexRoute component={ SearchContainer } onEnter={this._removeTagFilter} />
    <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
    <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
    <Route path="/bathrooms/new" component={ BathroomFormContainer } onEnter={this._ensureLoggedIn} />
    <Route path="/bathrooms/tagged/:tag" component={ SearchContainer } onEnter={this._addTagFilter} />
    <Route path="/bathrooms/:bathroomId" component={ BathroomShowContainer } />
  </Route>
</Router>
  ```

####Authentication

User authentication happens on the frontend framework using actions dispatched by components using the state of `Store.session` to populate a current user. Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#create`.

####Upvote and Tag Join Tables

The database is also populated with multiple join tables describing the relationship between `user`s, `tagname`s, and `meme`s. ActiveRecord associations create the `tags` join table between `tagname`s and `meme`s, the upvotes/downvotes through the polymorphic association with a value table describing the `vote_val` between memes and users, and the user comments relationship through users, memes, and their comments. These associations allow for instantaneous updates on likes and comments. The models maintain their simplicity and autonomy, with their associations and the jbuilder views doing the majority of the work.

```ruby
class Meme < ActiveRecord::Base
  validates :url, :title, presence: true

  def ourTags=(tags)
    @tags = tags
  end

  include Votable

  belongs_to :user

  has_many :comments
  has_many :tags, inverse_of: :meme
  has_many :votes, :as => :votable

  has_many :tagnames,
    through: :tags,
    source: :tagname

end
  ```


####Infinite Scroll

On meme index pages, memes are fed to you 6 at a time using a scroll event listener that calls `infScrollMemes` when you hit the bottom of the page. `infScrollMemes` dispatches either `requestAllMemes` with an appropriate sort, or `requestTaggedMemes` depending on the current url. In order to paginate correctly and send back the correct data, the `lastMemeId` is also sent.

```javascript
componentDidUpdate(){
  document.addEventListener('scroll', this.infScrollMemes);
}

componentWillUnmount(){
  document.removeEventListener('scroll', this.infScrollMemes);
}

infScrollMemes(){
    if (document.body.scrollHeight == (document.body.scrollTop + window.innerHeight)) {
      if(this.props.memes.length !== 0){
        const tag = this.props.params.tags;
        const hotOrFresh = this.props.location.pathname;
        const lastMemeId = parseInt(Object.keys(this.props.memes[this.props.memes.length-1])[0]);
        if(tag === undefined){
          this.props.requestAllMemes(hotOrFresh, lastMemeId);
        } else {
          this.props.requestTaggedMemes(tag, lastMemeId);
        }
      }
    }
}
```

The backend uses this data in varying ways to search for the correct meme; it utilizes ascending or descending `id`s for fresh, regular, and tagged sorts, but a karma recalculation is needed for the hot sort. A future implementation might cache karma data and limit by date so as to increase efficiency.

```ruby
def getTaggedMemes
  @lastMeme = params[:lastMeme].to_i

  @start = @lastMeme
  @tagname = Tagname.where(tagname: params[:tag])[0]
  @memes = @tagname.memes.where("memes.id > ?", @start).limit(6)
  render "api/memes/index"
end
```
