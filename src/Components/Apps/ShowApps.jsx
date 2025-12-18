import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ShowApps = ({ app }) => {
  //
  // companyName
  // :
  // "productive.io"
  // description
  // :
  // "This app is built to enhance teamwork and streamline communication in an era where remote and hybrid work has become the norm. It combines messaging, task management, and file sharing into a single platform, removing the need to juggle multiple tools. Teams can create dedicated channels for projects, departments, or topics, keeping conversations organized and searchable. Real-time chat and video conferencing ensure that communication is fast, clear, and engaging.\n\n  Beyond messaging, the app includes task boards where team members can assign responsibilities, set deadlines, and track progress. This creates transparency, so everyone knows who is working on what and when deliverables are expected. File sharing is seamless, with built-in version control to avoid confusion over multiple drafts. Integrations with third-party services like cloud storage, calendars, and project management tools keep all work centralized.\n\n  Notifications are intelligently designed to reduce noise—you get alerted only when necessary. Search functionality allows you to quickly find past discussions, files, or tasks. The app also supports status updates and availability indicators, helping teams coordinate without unnecessary interruptions.\n\n  Security features like encryption and multi-factor authentication protect sensitive company data. For managers, built-in analytics show team productivity and communication patterns, providing insights for improvement. Whether you are a small business, a startup, or a large organization, the app adapts to your scale. Its mobile-friendly design ensures that work continues smoothly even on the go.\n\n  In short, this collaboration app isn’t just about chatting—it’s about creating a shared digital workspace that fosters productivity, accountability, and unity among team members. It transforms communication into collaboration, ensuring everyone stays aligned and projects move forward efficiently."
  // downloads
  // :
  // 1975578
  // id
  // :
  // 132
  // image
  // :
  // "https://i.ibb.co.com/pjLWgn30/icon-136.webp"
  // rating
  // :
  // 4.7
  // ratingAvg
  // :
  // 4.7
  // ratings
  // :
  // (5) [{…}, {…}, {…}, {…}, {…}]
  // reviews
  // :
  // 325540
  // size
  // :
  // 203
  // title
  // :
  // "Google Tasks"
  // _id
  // :
  // "6943cd25a64f1047cf3ae4ca"

  const downloads = (app.downloads / 100000).toFixed(2);

  return (
    <Link
      to={`/apps/${app.id}`}
      className="text-center shadow-lg p-2 rounded-md bg-white hover:scale-105"
    >
      <img className="p-2 h-52 mx-auto" src={app.image} alt="" />
      <h3 className="font-semibold text-xl mb-8">{app.title}</h3>
      <div className="flex justify-between items-center my-2 px-3 ">
        <div className="bg-[#F1F5E8] px-2 py-1 rounded-md">
          <p className="text-[#00D390] font-semibold text-sm flex gap-1 items-center">
            <Download className="w-4" /> {downloads} L
          </p>
        </div>
        <div className="bg-[#FFF0E1] px-2 py-1 rounded-md">
          <p className="text-[#FF8811] font-semibold text-sm flex gap-1 items-center">
            <Star className="w-4" /> {app.ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ShowApps;
