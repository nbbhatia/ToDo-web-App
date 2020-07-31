import axios from "axios";

export const getDataService = () => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  return axios({
    method: "GET",
    url: "http://localhost:1080/apiTodo",
    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const addDataService = (request) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");
  return axios({
    method: "POST",
    url: "http://localhost:1080/apiTodo/addData",
    headers: headers,
    data: request.data,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
// export const deleteDataService = (request) => {
//   console.log("request", request);
//   let headers = new Headers();
//   headers.append("Content-Type", "application/json");
//   headers.append("Accept", "application/json");
//   headers.append("Origin", "http://localhost:3000");

//   return axios({
//     method: "DELETE",
//     url: `http://localhost:1080/apiTodo/delete/${request.id}`,
//     headers: headers,
//     // params: ,
//     // data: request.params,
//   })
//     .then((response) => {
//       console.log("response", response);
//       return response;
//     })
//     .catch((err) => {
//       return err.response;
//     });
// };

export const deleteDataService = (payload) => {
  return axios
    .delete(`http://localhost:1080/apiTodo/delete/${payload.id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
