import React, { Component } from 'react'
import moment from 'moment'

export class Notifications extends Component {
  render() {
    const {notifications} = this.props;
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">
              Notifications
            </div>
            <ul className="notifications">
              {notifications && notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="gray-text note-date">
                  {moment(item.time.toDate()).fromNow()}
                </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Notifications
