export function send_data(data,eventlist)
{
  return{
    type:"ADD_DATA",
    data:data,
    list:eventlist
  }
}
export async function handleapi(username,dispatch) {
  const link = `https://api.github.com/users/${username}`;
   await fetch(link).then((response) => {
    return response.json()}).then((res)=>{
      console.log("res :",res);
      const url = res.events_url.slice(0,res.events_url.length-10);
      console.log(url);
      fetch(url).then((res)=>{return res.json()}).then((list)=>{
        console.log("list : ",list);
        dispatch(send_data(res,list));
      })
    });
  }

