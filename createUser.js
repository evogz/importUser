//create authentication users
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "YOUR_PROJECT_ID",
        "private_key_id": "YOUR_PROJECT_PRIVATE_KEY",
        "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PROJECT_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
        "client_email": "YOUR_PROJECT_CLIENT_EMAIL",
        "client_id": "YOUR_PROJECT_CLIENT_ID",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mtb2y%40YOUR_PROJECT.iam.gserviceaccount.com"
    }
    ),
    projectId: "YOUR_PROJECT_ID"
});

var users = [
    {
        "name": "Test",
        "surname": "User",
        "email": "test@test.com",
        "password": "test1234!!"
    }
];

users.forEach(function (obj) {
    admin.auth().createUser({
        email: obj.email,
        password: obj.password,
        displayName: `${obj.name} ${obj.surname}`,
    }).then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.email);
    }).catch((error) => {
        console.log('Error creating new user:', error, obj.email);
    });
});
