
import React from "react";


import Tabs from "./Tabs";
import Panel from "./Panel";

import { events } from "./data";

import "./styles.css";


function Faq() {
  return (
    <Tabs>

      <Panel title="Getting Started">
        {events
          .filter(event => event.category === "Getting Started")
          .map(event => {
            return <div key={event.id}>
                <h2> 
                {event.title}
            </h2>
            {event.description}</div>;
          })}
      </Panel>

      <Panel title="Creating A Category">
        {events
          .filter(event => event.category === "Creating Category")
          .map(event => {
            return <div key={event.id}>
                <h2> 
                {event.title}
            </h2>
            {event.description}</div>;
          })}
      </Panel>

      <Panel title="Creating A Subject">
        {events
          .filter(event => event.category === "Creating a Subject")
          .map(event => {
            return <div key={event.id}>
                <h2> 
                {event.title}
            </h2>
            {event.description}</div>;
          })}
      </Panel>

      <Panel title="Creating An Assessment">
        {events
          .filter(event => event.category === "Creating an Assessment")
          .map(event => {
            return <div key={event.id}>
                <h2> 
                {event.title}
            </h2>
            {event.description}</div>;
          })}
      </Panel>

      <Panel title="Filter Points of View">
        {events
          .filter(event => event.category === "Filter Points of View")
          .map(event => {
            return <div key={event.id}>
                <h2> 
                {event.title}
            </h2>
            {event.description}</div>;
          })}
      </Panel>

      <Panel title="Assessment Topics">
        {events
          .filter(event => event.category === "Assessment Topics")
          .map(event => {
            return <div key={event.id}>
                <h2> 
                {event.title}
            </h2>
            {event.description}</div>;
          })}
      </Panel>
    </Tabs>
  );
}

export default Faq;