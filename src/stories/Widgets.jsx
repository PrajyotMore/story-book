import React from "react";
import { ExportOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import "./widgets.css";

import ActivityImage from "../../src/stories/assets/activity-11.svg";

export const Widgets = ({ backgroundColor, title_header, counter, ...props}) => {
  console.log('props widget',backgroundColor, title_header, counter)
  return (
    <>
      <div
        className="activityTrackerWidget3"
        style={{
          backgroundColor: backgroundColor
        }}
      >
          <div className="header2">
            <img className="activity1Icon2" alt="" src={ActivityImage} />
            <div
              className="widgetInfo"
              style={{ backgroundColor: backgroundColor }}
            >
              <div className="title">
                {title_header}
              </div>
              <div className="counter">
                <b className="rajatMishra">{counter}</b>
              </div>
              <img className="launch1Icon2" alt="" src="/launch-1.svg" />
            </div>
            <div>
            <ExportOutlined style={{ color: "#fff" }} />

            </div>
          </div>
        <div className="body">
          <div
            className="hScroll"
          >
            <div className="mainColumn11">
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild11"
                        alt=""
                        src="/rectangle-1719.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild11"
                        alt=""
                        src="/rectangle-1719.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild11"
                        alt=""
                        src="/rectangle-1719.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
            </div>
            <div className="mainColumn11">
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild14"
                        alt=""
                        src="/launch-1.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild14"
                        alt=""
                        src="/launch-1.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
              <div className="toDoList6">
                <div className="toDoListInner">
                  <div className="overdue121220191230PParent">
                    <div className="overdue121220196">
                      12/01/2023 : 12:30 PM
                    </div>
                    <div className="alerts">
                      <div className="alertsChild" />
                      <div className="high">High</div>
                    </div>
                  </div>
                </div>
                <div className="frameParent2">
                  <div className="frameWrapper">
                    <div className="groupWrapper">
                      <img
                        className="frameChild14"
                        alt=""
                        src="/launch-1.svg"
                      />
                    </div>
                  </div>
                  <div className="itIsA6">
                    Design meeting arrangement for TaTa B2B and promote sales
                    drive with tata.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


Widgets.propTypes = {
  backgroundColor: PropTypes.string,
  title_header: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired
};


