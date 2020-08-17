import Axios from "axios";

const baseURL = "http://localhost:4000/";

export const getFrameworks = () => {
  return Axios.get(`${baseURL}frameworks`, {})
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(response.status);
      } else {
        return Promise.resolve(response.data);
      }
    })
    .catch((err) => Promise.reject(err));
};

export const postFramework = (framework: any) => {
  return Axios.post(`${baseURL}frameworks`, framework, {
    
  })
    .then(({ status, data }) => {
      if (status !== 200) {
        return Promise.reject(status);
      } else {
        return Promise.resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      Promise.reject(err);
    });
};

export const deleteFramework = (id: number) => {
  return Axios.delete(`${baseURL}frameworks/delete/${id}`, {
  })
    .then(({ status, data }) => {
      if (status !== 200) {
        return Promise.reject(status);
      } else {
        return Promise.resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      Promise.reject(err);
    });
};

export const updateFramework = (framework: any, id: number) => {
  return Axios.patch(`${baseURL}frameworks/update/` + id, framework, {
  })
    .then(({ status, data }) => {
      if (status !== 200) {
        return Promise.reject(status);
      } else {
        return Promise.resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      Promise.reject(err);
    });
};

export const getFrameworkById = (id: number) => {
  return Axios.get(`${baseURL}frameworks/`+ id , {
  })
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject(response.status);
      } else {
        return Promise.resolve(response.data);
      }
    })
    .catch((err) => Promise.reject(err));
};

export const getCompanyIdByName = (companyName: string, token: string) => {
  let filter = {
    fields: ["id"],
    where: {
      name: companyName,
    },
  };

  return Axios.get(`${baseURL}Companies?filter=` + JSON.stringify(filter), {
    headers: {
      Authorization: token,
    },
  })
    .then(({ status, data }) => {
      if (status !== 200) {
        return Promise.reject(status);
      } else {
        return Promise.resolve(data[0]);
      }
    })
    .catch((err) => Promise.reject(err));
};

export const getCompanyNameById = (companyId: string, token: string) => {
  let filter = {
    fields: ["name"],
    where: {
      id: companyId,
    },
  };

  return Axios.get(`${baseURL}Companies?filter=` + JSON.stringify(filter), {
    headers: {
      Authorization: token,
    },
  })
    .then(({ status, data }) => {
      if (status !== 200) {
        return Promise.reject(status);
      } else {
        return Promise.resolve(data[0]);
      }
    })
    .catch((err) => Promise.reject(err));
};



export const editCompany = (info: any, id: number, token: any) => {
  return Axios.patch(`${baseURL}Companies/${id}`, info, {
    headers: {
      Authorization: token,
    },
  })
    .then(({ status, data }) => {
      if (status !== 200) {
        return Promise.reject(status);
      } else {
        return Promise.resolve(data);
      }
    })
    .catch((err) => {
      console.log(err);
      Promise.reject(err);
    });
};



