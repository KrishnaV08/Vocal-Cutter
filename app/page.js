"use client";
import {
  Container,
  Drawer,
  Title,
  Button,
  Text,
  FileInput,
} from "@mantine/core";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpened((prevOpened) => !prevOpened); // Toggles drawer state
  };

  return (
    <div>
      <Button
        onClick={toggleDrawer}
        style={{
          position: "fixed", // Fixed position to ensure it stays visible
          top: 20,
          left: 20,
        }}
      >
        {"|||"}
      </Button>
      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Menu"
        padding="md"
        size="md" // You can change the size based on your preference
        withCloseButton
        styles={{
          body: {
            overflowY: "hidden", // Allow scrolling only when content overflows
            maxHeight: "90vh", // Limit height to prevent overflowing
            backgroundColor: "#fff", // Ensure background is visible
          },
        }}
      >
        {"Hello"}
        <div style={{ padding: "20px" }}>
          <h2>Visible Content</h2>
        </div>
      </Drawer>
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17171E",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#17171E",
          }}
        >
          <div style={{ padding: "40px", fontWeight: "900" }}>
            <a href="#how" style={{ padding: "20px" }}>
              HOW IT WORKS{" "}
            </a>
            <a href="#how" style={{ padding: "20px" }}>
              JOINER{" "}
            </a>
          </div>
          <Title
            order={1}
            align="center"
            style={{ fontSize: "52.24px", fontWeight: "bolder" }}
          >
            Audio Cutter
          </Title>
          <Text
            align="center"
            style={{
              margin: "40px",
              fontSize: "31.12px",
            }}
          >
            Free editor to trim and cut any audio file online
          </Text>
          <FileInput
            className="joinButton"
            label="Browse my files"
            onChange={setAudioFile}
            accept="audio/*"
          ></FileInput>
        </Container>
      </div>
      <div className="hell"></div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "baseline",
          paddingLeft: "60px",
          paddingTop: "100px",
          height: "200px",
          backgroundColor: "#17171E",
        }}
      >
        <p className="how">How to cut audio</p>
      </div>
      <div
        style={{
          backgroundColor: "#17171E",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "baseline",
            marginLeft: "60px",
            paddingLeft: "30px",
            marginRight: "50px",
            backgroundColor: "#1F1F28",
            fontSize: "30px",
            borderLeft: "6px solid #665dc3",
            height: "350px",
          }}
        >
          <p>
            This app can be used to trim and/or cut audio tracks, remove an
            audio fragments. Fade in and fade out your music easily to make the
            audio harmoniously.<br></br>
            <br></br>
            <br></br> It fast and easy to use. You can save the audio file in
            any format (codec parameters are configured)
            <br></br>
            <br></br>
            <br></br>It works directly in the browser, no needs to install any
            software, is available for mobile devices.
          </p>
        </div>
        <p className="hey">Privacy and Security Guaranteed</p>
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "baseline",
            marginLeft: "60px",
            paddingLeft: "30px",
            marginRight: "50px",
            backgroundColor: "#1F1F28",
            fontSize: "30px",
            borderLeft: "6px solid #665dc3",
            height: "40px",
          }}
        >
          This is serverless app. Your files does not leave your device
        </div>
      </div>
      <div style={{
          display: "flex",
          height: "100vh",
          alignItems: "baseline",
          paddingLeft: "60px",
          paddingTop: "100px",
          height: "200px",
          backgroundColor: "#17171E",
        }}></div>
    </div>
  );
}
