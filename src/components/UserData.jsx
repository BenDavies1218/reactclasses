import React from "react";

const UserData = ({ userData, gameStats, isEditing, onStatChange }) => {
  const handleInputChange = (e, stat) => {
    onStatChange(userData.userId, stat, e.target.value);
  };

  return (
    <tr>
      {gameStats.map((stat) => (
        <td key={stat}>
          {stat === "playerName" ? (
            userData.playerName
          ) : isEditing ? (
            <input
              value={userData.commonStats[stat] || 0}
              onChange={(e) => handleInputChange(stat, e.target.value)}
            />
          ) : (
            userData.commonStats[stat] || 0
          )}
        </td>
      ))}
    </tr>
  );
};


export default UserData;
