import React, { Component }  from 'react';
import Posts from "./posts";
import SideBar from "./sidebar";
import Stories from "./stories";


export default function Main() {
  return (
    <div class="main">
      <div class="main-container">
        <div class="feed">
          <Stories />
          <Posts />
        </div>
        <div class="space"></div>
        <SideBar />
      </div>
    </div>
  );
}
