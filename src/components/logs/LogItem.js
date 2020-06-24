import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog } from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog }) => {
  // Delete
  const onDelete = () => {
    deleteLog(log.id);

    // Message
    M.toast({ htmk: "Log Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "green-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> Last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
};

// PropTypes
LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
