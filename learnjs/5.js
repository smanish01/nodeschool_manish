function checkUsersValid(goodUsers) {

      return function allUsersValid(submittedUsers) {    
        return submittedUsers.every((sub)=>{
            return goodUsers.some((good)=>{
                return good.id == sub.id;
            });

        });

      }
    }

    module.exports = checkUsersValid