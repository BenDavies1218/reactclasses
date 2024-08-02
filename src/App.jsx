import React, { useState } from "react";
import "./App.css";
import UserData from "./components/UserData";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [playerStats, setPlayerStats] = useState([
    {
      userId: "usersId1",
      playerName: "username1",
      team: "Alpha",
      stats: {
        wins: 5,
        losses: 2,
        draws: 1,
        kills: 50,
        deaths: 20,
        assists: 30,
      },
    },
    {
      userId: "usersId2",
      playerName: "username2",
      team: "Bravo",
      stats: {
        wins: 3,
        losses: 4,
        draws: 1,
        kills: 30,
        deaths: 25,
        assists: 20,
      },
    },
  ]);

  const tournamentData = {
    tournamentName: "Apex Legends Championship",
    author: "Ben",
    teams: ["Alpha", "Bravo"],
    gameStats: [
      "playerName",
      "wins",
      "losses",
      "draws",
      "kills",
      "deaths",
      "assists",
      "score",
    ],
    game: "Apex Legends",
    gameType: "Battle Royale",
    description: "Apex Legends Tournament",
    minimumPlayers: 2,
    maximumPlayers: 10,
    password: "securepassword",
    joinlink: "https://brawl.gg/join/:JWT",
    users: ["user1_Id", "user2_Id"],
  };

  // Group players by team
  const groupedByTeams = playerStats.reduce((acc, player) => {
    if (!acc[player.team]) {
      acc[player.team] = [];
    }
    acc[player.team].push(player);
    return acc;
  }, {});

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleStatChange = (userId, stat, value) => {
    setPlayerStats((prevStats) =>
      prevStats.map((player) =>
        player.userId === userId
          ? {
              ...player,
              stats: { ...player.stats, [stat]: value },
            }
          : player
      )
    );
  };

  return (
    <div className="App">
      <h1>{tournamentData.tournamentName}</h1>
      <button onClick={handleEditToggle}>{isEditing ? "Save" : "Edit"}</button>
      <div className="container">
        <table>
          <tbody>
            {Object.keys(groupedByTeams).map((team) => (
              <React.Fragment key={team}>
                <tr>
                  <td
                    colSpan={tournamentData.gameStats.length}
                    className="team-header"
                  >
                    {team}
                  </td>
                </tr>
                <tr>
                  {tournamentData.gameStats.map((stat) => (
                    <th key={stat}>
                      {stat.charAt(0).toUpperCase() + stat.slice(1)}
                    </th>
                  ))}
                </tr>
                {groupedByTeams[team].map((userStat) => (
                  <UserData
                    key={userStat.userId}
                    userData={userStat}
                    gameStats={tournamentData.gameStats}
                    isEditing={isEditing}
                    onStatChange={handleStatChange}
                  />
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
