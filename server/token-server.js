Meteor.methods({
  generateLoginToken: function () {
    return Accounts._generateStampedLoginToken();
  },
  setLoginTokenById: function (userId, stampedToken) {
    check(userId, String);
    check(stampedToken, Object);
    if (userId === Meteor.userId()) {
      Accounts._clearAllLoginTokens(userId);
      Accounts._insertLoginToken(userId, stampedToken);
    }
  }
});
