##Session Management for Web Applications

Session management is intended to provide a robust and cryptographically secure association between authenticated users and their sessions. Using session management combined with secure HTTP (HTTPS), you can enforce authorization checks and prevent common attacks such as replay attacks, request forging, and man-in-the-middle attacks.

A web server is free to forget about pages it has served in the past, so there is no explicit state. To tie state explicitly held on the server to a session in progress, an explicit session ID is stored somewhere in client-submitted data.

A session is a lasting connection between a web user (the browser) and the Uniface Web Application Server. It starts when the user starts to access a web application and ends when the browser is closed, when the session expiry time is exceeded, or when the user logs out (assuming a logout mechanism is provided). Uniface generates a unique session identifier (session ID) for each session, which can be accessed using the SESSION property of $webinfo("WEBSERVERCONTEXT").
Note iconNote: The session ID is unique to the browser, so it is reused by the next user on the same browser.

To safely identify a user in a session, you can:

1. Remove the session ID when a user logs out of an application. If no logout functionality is provided, ensure you remove the session ID when a new user authenticates.

2. Bind the session identifier (session ID) and the user identifier (user name or user ID). This bundled information should be stored in an encoded session cookie.

3. Have the application maintain the list of logged on user sessions in a table where the session ID and the user ID form the user session. When retrieving data from the table:

4. Do not use a search profile on session ID: NULL. Doing so will retrieve all the occurrences on the table.

5. Check that the retrieved occurrences are equal to one, so you are sure to only get the specified user session.

For more information, see State Management Mechanisms.
##Threats

The session ID is unique and is therefore vulnerable to attacks in which the session ID is stolen and then used to mimic a user and gain further access to the application. The following topics describe some of the techniques used to steal session IDs, and how they can be prevented:
    Session Fixation
    Session Sidejacking
    Session replay—using a session ID, an attacker can replay a web session to masquerade as a user and gain access to a web application
    Cross-Site Scripting
    Eavesdropping and Cookies Containing Sensitive Data

##Guidelines

In general the following principles apply:
    Store authorization and role data only on the server side.

    Do not put hidden fields in data that is submitted to the server. If a field is hidden, it probably needs to be protected and only available on the server side. However, you could use a hidden field for sequence protection.

    Do not store session data in shared areas of the web server’s disk. This is especially important if you use the filedump and fileload Proc commands to access temporary files containing session data.

    Ensure that the session ID is unique and tied to a specific HTTP client instance to prevent hijacking and replay attacks. For instance, you could use the combination of session ID and client IP address, which can be obtained using the $webinfo Proc statement. This information needs to be maintained on the server and validated in each request in the pre-request trigger.

    If the client is connected via a proxy server, the X_FORWARDED_FOR header contains the IP address of the proxy server, which should be used in addition to the IP address, if set. Like the IP address, this header can be obtained using the $webinfo Proc statement.

    Ensure that session tokens expire on the Uniface side by explicitly removing them from after a timeout. The timeout should be 5 minutes for high-risk applications and no more than 20 minutes for low-risk applications. For highly-protected applications, do not use any mechanisms that prevent a session from idling out, and do not remember the user. Validating the session in the Pre-Request trigger is vital to ensure detection.

    Regenerate session IDs prior to significant actions, after a certain number of requests, or after a certain amount of time has lapsed. By expiring and regenerating tokens, you reduce the risk of session hijacking and brute force attacks.

    Detect situations in which a session token is captured, for example by spyware, viruses, or trojans. If a session token is captured, either on the network or on the client, then the account is prone to a replay or hijacking attack. To detect such situations, you could associate the session ID, IP address, and other attributes from the user’s headers in a hash. Should the hash change, then one of the details has changed and it is likely that a session fixation attack has occurred. This information needs to be stored on the server side and validated at each request in the Pre-Request trigger.

    Ensure that session tokens are invalidated and removed to prevent them from being used by the next user on a shared computer (for example, a kiosk or internet café). This can be done by providing explicit login and logout functionality, which should invalidate the session on the web server, remove all state, and overwrite session cookies.

    Do not use the URL to transmit session ID’s since these are often cached and cannot easily be removed from the browser's history.


