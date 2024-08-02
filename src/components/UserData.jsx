import React from "react";

const UserData = ({ userData, gameStats, isEditing, onStatChange }) => {
  const handleInputChange = (e, stat) => {
    onStatChange(userData.userId, stat, e.target.value);
  };

  return (
    <tr>
      {gameStats.map((stat) => (
        <td key={stat}>
          {isEditing ? (
            <input
              value={
                userData.stats[stat] !== undefined ? userData.stats[stat] : 0
              }
              onChange={(e) => handleInputChange(e, stat)}
            />
          ) : userData.stats[stat] !== undefined ? (
            userData.stats[stat]
          ) : (
            0
          )}
        </td>
      ))}
    </tr>
  );
};

export default UserData;
