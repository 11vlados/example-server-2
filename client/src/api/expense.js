import request from "../lib/request";

export const newExpense = ({ amount, category, description, date, owner }) => {
  return request({
    url: "/expenses/create",
    method: "post",
    data: { amount, category, description, date, owner }
  });
};

export const getExpenses = () => {
  return request({
    url: "/expenses",
    method: "get"
  });
};

export const deleteExpense = _id => {
  return request({
    url: `/expenses/delete/${_id}`,
    method: "get"
  });
};
