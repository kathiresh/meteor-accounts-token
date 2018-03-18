Accounts.setLoginToken = function(userId){
  console.log('====calling cilent==', userId)
  try {
    check(userId, String);
    Meteor.call('generateLoginToken', function(error, stampedToken){
        console.log('======stampedToken==========',stampedToken);
        Meteor.call('setLoginTokenById', userId, stampedToken);
    });
  } catch (e) {
     throw new Meteor.Error('Token-error', 'Error in generating token');
  }
};
