import React from "react";
import "../Dasboard.css";

const Messages = ({ comment }) => {
    console.log("hii")
  console.log(comment);

  return (
    <div className="background1">
      <section className="mt-5 mr-5 ml-5">
        <div className="table-responsive">
          <table class="table bg-light">
            <thead className="thead-dark">
              <tr>
                <th className="p-4" scope="col">Your Messages</th>
              </tr>
            </thead>
            <tbody>
              {comment.map((el) => (
                <tr key={el.id}>
                  <td className="p-4">{el.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Messages;
