import { useEffect, useState } from "react";
import GroupCard from "../components/Groups";
import { getTeams } from "../services/api";

export default function Groups() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((data) => {
      if (data && data.teams) {
        setTeams(data.teams.slice(0, 24));
      }
    });
  }, []);

  return (
    <div className="groups-page">
      <h1>Group Stage</h1>

      <div className="groups-grid">
        <GroupCard group="Group A" teams={teams.slice(0, 4)} />
        <GroupCard group="Group B" teams={teams.slice(4, 8)} />
        <GroupCard group="Group C" teams={teams.slice(8, 12)} />
        <GroupCard group="Group D" teams={teams.slice(12, 16)} />
        <GroupCard group="Group E" teams={teams.slice(16, 20)} />
        <GroupCard group="Group F" teams={teams.slice(20, 24)} />
      </div>
    </div>
  );
}
