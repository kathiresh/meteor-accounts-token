Meteor.methods({

  generateLoginToken: function(){
   console.log('=====calling====generateLoginToken=');
       return Accounts._generateStampedLoginToken();
  },

  setLoginTokenById : function(userId, stampedToken) {
    check(userId, String);
    check(stampedToken, Object);
    console.log('===stampedToken==',stampedToken);
    if(userId === Meteor.userId()) {
      Accounts._clearAllLoginTokens(userId);
      Accounts._insertLoginToken(userId, stampedToken);
    }
  }
});
