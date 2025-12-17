import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SidebarDemo } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/users/User";
import CommunitiesTable from "./pages/community/CommunityTable";
import AddCommunityForm from "./pages/community/AddCommunity";
import StudentVerificationTable from "./pages/Student-verificationTable";
import UserBadgesTable from "./pages/UserBadgeTable";
import UserEngagementTable from "./pages/UserEngagement-table";
import PostsTable from "./pages/PostTable";
import CommentsTable from "./pages/CommentsTable";
import ConversationsTable from "./pages/ConversationTable";
import MessagesTable from "./pages/MessageTable";
import BannedCommentsTable from "./pages/BannedCommentsTable";
import ReportedPostsTable from "./pages/ReportedPostsTable";
import ReportedCommentsTable from "./pages/ReportedComments";
import BlockedUsersTable from "./pages/BlockUser";
import UserWarningsTable from "./pages/UserWarningTable";
import BannedUsersTable from "./pages/BannedUserTable";
import ModerationLogsTable from "./pages/ModerationLogsTable";
import NotificationsTable from "./pages/NotificationTable";
import PostVotesTable from "./pages/PostVotesTable";
import CommentVotesTable from "./pages/CommentVotesTable";
import MediaTable from "./pages/MediaTable";
import TagsTable from "./pages/TagsTable";
import PostTagsTable from "./pages/PostTagsTable";
import ActivityLogsTable from "./pages/ActivityLogsTable";
import CommunitySettingsTable from "./pages/CommunitySettingTable";
import UserVerificationTable from "./pages/UserVerificationTable";
import SavedPostsTable from "./pages/SavedPost";
import PostStatsTable from "./pages/PostStatsTable";
import MentionsTable from "./pages/MentionTable";
import TrendingPostsTable from "./pages/TrendingPostTable";
import SearchIndexTable from "./pages/SearchIndex";
import UserSearchHistoryTable from "./pages/UserSearchHistoryTable";
import Login from "./pages/auth/Login";
import UniversityTable from "./pages/University/UniversityTable";
import AddUniversity from "./pages/University/AddUniversity";
import Adduser from "./pages/users/Adduser";
import ViewUniversity from "./pages/University/ViewUniversity";
import Profile from "./pages/auth/Profile/Profile";
import Degree from "./pages/degree/Degree";
import AddDegree from "./pages/degree/AddDegree";
import AllRoles from "./pages/users/AllRoles";
import VerifyToken from "./pages/publicPage/VerifyToken";
// import AddStudents from "./pages/students/Addstudents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
           {/*--------------------------------- Public Page --------------------------------- */}
           <Route path="/verify-token" element={<VerifyToken />} />
        
        <Route path="/" element={<Login />} />
        <Route element={<SidebarDemo />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/*---------------------------------User --------------------------------- */}

          <Route path="/allusers" element={<AllRoles />} />
          {/* <Route path="/allstudents" element={<AddStudents />} /> */}
          <Route path="/user" element={<User />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/profile" element={<Profile />} />

          {/*---------------------------------Univeristy --------------------------------- */}
          <Route path="/university" element={<UniversityTable />} />
          <Route path="/adduniversity" element={<AddUniversity />} />
          <Route path="/edituniversity/:id" element={<AddUniversity />} />
          <Route path="/university/:id" element={<ViewUniversity />} />

          {/*--------------------------------- Degree --------------------------------- */}
            <Route path="/degree" element={<Degree />} />
            <Route path="/adddegree" element={<AddDegree />} />

          <Route path="/community" element={<CommunitiesTable />} />
          <Route path="/addcommunity" element={<AddCommunityForm />} />
          <Route path="/student" element={<StudentVerificationTable />} />
          <Route path="/userbadge" element={<UserBadgesTable />} />
          <Route path="/userengagement" element={<UserEngagementTable />} />
          <Route path="/posts" element={<PostsTable />} />
          <Route path="/comments" element={<CommentsTable />} />
          <Route path="/conversation" element={<ConversationsTable />} />
          <Route path="/messages" element={<MessagesTable />} />
          <Route path="/bannedcomments" element={<BannedCommentsTable />} />
          <Route path="/reportedposts" element={<ReportedPostsTable />} />
          <Route path="/reportedcomments" element={<ReportedCommentsTable />} />
          <Route path="/blockuser" element={<BlockedUsersTable />} />
          <Route path="/warning" element={<UserWarningsTable />} />
          <Route path="/bannedUser" element={<BannedUsersTable />} />
          <Route path="/moderation" element={<ModerationLogsTable />} />
          <Route path="/notifications" element={<NotificationsTable />} />
          <Route path="/postvotes" element={<PostVotesTable />} />
          <Route path="/commentvotes" element={<CommentVotesTable />} />
          <Route path="/media" element={<MediaTable />} />
          <Route path="/tags" element={<TagsTable />} />
          <Route path="/posttags" element={<PostTagsTable />} />
          <Route path="/activitylogs" element={<ActivityLogsTable />} />
          <Route
            path="/communitysettings"
            element={<CommunitySettingsTable />}
          />
          <Route path="/userverification" element={<UserVerificationTable />} />
          <Route path="/savepost" element={<SavedPostsTable />} />
          <Route path="/poststats" element={<PostStatsTable />} />
          <Route path="/mentions" element={<MentionsTable />} />
          <Route path="/trendingpost" element={<TrendingPostsTable />} />
          <Route path="/searchindex" element={<SearchIndexTable />} />
          <Route path="/searchhistory" element={<UserSearchHistoryTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
