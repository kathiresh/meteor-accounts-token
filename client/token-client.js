Accounts.setLoginToken = function(userId){
  try {
    check(userId, String);
    Meteor.call('generateLoginToken', function(error, stampedToken){
        Meteor.call('setLoginTokenById', userId, stampedToken);
    });
  } catch (e) {
     throw new Meteor.Error('Token-error', 'Error in generating token');
  }
};
