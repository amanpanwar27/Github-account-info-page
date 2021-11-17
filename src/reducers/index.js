import { rootstate } from "../store/storeconfig";
export default function reducer(state = rootstate, action) {
   if (action.type === "ADD_DATA")
    {
      console.log(action.data.login);
      return {
      username: action.data.login,
      name: action.data.name,
      avatar: action.data.avatar_url,
      created_at: action.data.created_at,
      events: action.data.events_url,
      following: action.data.following,
      followers: action.data.followers,
      repos: action.data.public_repos,
      eventslist:action.list
    }}
  return state;
}
