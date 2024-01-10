import React, { useState } from "react";
import { Button, Card, Carousel, Checkbox, Col, Form, Input, Row } from "antd";
import "./login.css";
import logo from "../../src/stories/assets/logo.png";

export const Login = () => {

  const carouselStyle = {
    borderRadius: "30px",
    background: "#fff",
  };

  const slideStyle = {
    margin: "0 8px",
    borderRadius: "30px",
  };
  return (
    <>
      <div className="login_page">
        <Row>
          <Col
            className="login_left_panel d-none d-lg-block"
            xs={24}
            sm={24}
            md={24}
            lg={14}
          >
            <div className="left_panel_card">
                <div style={slideStyle} className="position-relative">
                  <img
                    src={logo}
                    style={{
                      position: "absolute",
                      top: "30px",
                      left: "30px",
                      width: "50px",
                      height: "60px",
                    }}
                    alt="second_img"
                  />
                  <span
                    className="text_caption"
                    style={{
                      position: "absolute",
                      top: "120px",
                      left: "30px",
                      width: "329px",
                      height: "92px",
                      fontSize: "30px",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    IKHLAS DARIKU HADIAH UNTUKMU
                  </span>
                </div>
                
            </div>
          </Col>
          <Col
            className="login_right_panel d-flex flex-column"
            xs={24}
            sm={24}
            md={24}
            lg={10}
          >
            <div className="form_wrapper">
              <Form layout="vertical" className="w-100">
                <div className="logo">
                  <div style={{ width: "100%", objectFit: "cover" }}>
                    <img src={logo} alt="logo" />
                  </div>
                  <h4 className="mb-4">Login</h4>
                </div>
                <Form.Item
                  name="username"
                  label="Username"
                  messageVariables={{ messageVar: "username" }}
                  rules={[
                    { required: true, message: "${messageVar} is required" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="enter username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  messageVariables={{ passwordVar: "password" }}
                  rules={[
                    {
                      required: true,
                      message: "${passwordVar} can't be empty!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="enter password"
                  />
                </Form.Item>
                <div className="forget_password text-right mb-3">
                  Forget Username/Password
                </div>
                <Form.Item>
                  <Button
                    size="large"
                    className="submit_btn w-100"
                    type="primary"
                    htmlType="submit"
                    style={{ background: "#057C7F", borderRadius: "4px" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

