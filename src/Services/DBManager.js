import { initializeApp } from "firebase/app";
import { getDatabase, ref as sRef, get, set, push, onValue, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCjYKowqTCR4V2fsxG05NcQQ1NDAX34x2M",
    authDomain: "usireservationsite.firebaseapp.com",
    databaseURL: "https://usireservationsite-default-rtdb.firebaseio.com",
    projectId: "usireservationsite",
    storageBucket: "usireservationsite.firebasestorage.app",
    messagingSenderId: "1089007972864",
    appId: "1:1089007972864:web:13af98128d08bb0134dee5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

function listenForData(nodeToListen, functionToCall, arg = false)
{
    const ref = sRef(database, nodeToListen);

    onValue(ref, (snapshot) =>
    {
        const value = snapshot.val();

        if (arg)
        {
            functionToCall(value)
        }
        else
        {
            functionToCall()
        }
    });
}

function pushNode(node, value)
{
    const userRef = sRef(database, node);
    return push(userRef, value)
        .then(() =>
        {
            console.log('Node push successfully.', value);
            return true
        })
        .catch((error) =>
        {
            console.error('Error pushing node:', error);
            return null
        });
}

function setNode(node, value)
{
    const userRef = sRef(database, node);

    return set(userRef, value)
        .then(() =>
        {
            console.log('Node set successfully.');
            return true
        })
        .catch((error) =>
        {
            console.error('Error setting node:', error);
            return null
        });
}

function deleteNode(node)
{
    const userRef = sRef(database, node);

    return remove(userRef).then(() =>
    {
        console.log('removed')
    });
}

function getNode(node)
{
    const userRef = sRef(database, node);

    var data = null
    return get(userRef).then((snapshot) =>
    {
        if (snapshot.exists())
        {
            console.log('got node')
            return snapshot.val();
        } else
        {
            console.log("No data available");
            return null
        }
    }).catch((error) =>
    {
        console.error(error);
    });
}

export { getNode, setNode, pushNode, listenForData, deleteNode };