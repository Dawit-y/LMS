import MyLearnings from "../components/MyLearnings";
import MyCoursesCreated from "../components/MyCoursesCreated";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/api";

const Profile = () => {
  const [creatorId, setCreatorId] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    const checkIfCreator = async () => {
      try {
        const res = await axios.get(`/creators/user/${user.id}`);
        if (res.status === 200 && res.data) {
          setCreatorId(res.data.id);
        }
      } catch (error) {
        console.error("Error checking creator status:", error);
      }
    };

    if (user) {
      checkIfCreator();
    }
  }, [user]);
  return (
    <div className="mt-16 mx-16">
      <MyLearnings />
      {creatorId && <MyCoursesCreated creatorId={creatorId} />}
    </div>
  );
};

export default Profile;
