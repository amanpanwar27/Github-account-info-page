export function sendusername(name) {
  return {
    type: "ADD_USERNAME",
    username: name,
  };
}
export function handleapi(username) {
  const link = `https://api.github.com/users/${username}`;
  fetch(link).then((response) => {
    return response.json()}).then((res)=>{
      console.log(res);
    });
  }

