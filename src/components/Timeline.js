import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";

export const Timeline = () => {
  return (
    <div className="my-8 w-full">
      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#0fa373",
            color: "#fefefe",
            boxShadow: "10px 5px 5px rgba(62,105,109,255)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #0fa373" }}
          date="2022"
          dateClassName="md:text-black"
          iconStyle={{
            background: "#0fa373",
            color: "#fff",
            boxShadow: "5px 2px 5px rgba(62,105,109,255)",
          }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - Shipcom Wireless
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
          <div className="my-2">React | Tailwind | AntD | Azure DevOps</div>
          <li>Create custom React Components and Pages</li>
          <li>Code review and sprint planning</li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          dateClassName="md:text-black"
          iconStyle={{
            background: "#034f97",
            color: "#fff",
            boxShadow: "5px 2px 5px rgba(55,82,133,255)",
          }}
          contentStyle={{
            background: "#034f97",
            color: "#fff",
            boxShadow: "10px 5px 5px rgba(55,82,133,255)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #034f97" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            UX / UI Developer - Joyride.com
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
          <div className="my-2">React | Typescript | NodeJS | Google Cloud</div>
          <li>Create fully responsive components for web and mobile app</li>
          <li>
            Building features from ideation to frontend & backend development
          </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          dateClassName="md:text-black"
          iconStyle={{
            background: "#a51001",
            color: "#fff",
            boxShadow: "5px 2px 5px rgba(175,105,132,255)",
          }}
          contentStyle={{
            background: "#a51001",
            color: "#fff",
            boxShadow: "10px 5px 5px rgba(175,105,132,255)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #a51001" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Student - Flatiron School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
          <div className="my-2">Git | Ruby | Javascript | React</div>
          <li>Learned full stack development basics</li>
          <li>Created 5 projects on 2 week timelines</li>
          <li>Starting foundation for clean, scalable code</li>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
