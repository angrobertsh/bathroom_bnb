import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BathroomMiddleware from './bathroom_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware, BathroomMiddleware);

export default RootMiddleware;
