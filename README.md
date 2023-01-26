# RESTful API 

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | Portfolio API|
| Description | Relevant information on Kyle Canamar, to create various portfolios with front end frameworks. |
| Developers | Kyle Canamar |
| Live Website | https://portfolio-api-dr2t.onrender.com/ |
| Repo | https://github.com/kcanamar/portfolio-API |
| Technologies | Node.JS, Express.JS, JavaScript |

## Route Table

| Endpoint | Method | Response | Other |
| -------- | ------ | -------- | ----- |
| /api/projects | GET | JSON of all projects | |
| /api/about | GET | JSON of socials, contact, brand statement | |

## ERD 

```mermaid
%%{ init: { 
	'theme': 'base', 
	'themeVariables': { 
		'primaryColor': '#BBB6A5', 
		'primaryTextColor': '#2A2F33', 
		'primaryBorderColor': '#8C9491', 
		'lineColor': '#8C8C9C', 
		'secondaryColor': '#8C9491', 
		'tertiaryColor': '#fff' 
		} 
	} 
}%%
erDiagram
    ABOUT ||--|{ PROJECT : has
    ABOUT ||--|{ TECH : knows
    PROJECT }|--|{ TECH : demonstrates
    ABOUT {
        string name
        string email
        string linked
        string twitter
        string git
        string git
        string bio
        array project
        array tech
    }
    PROJECT {
        string image
        string name
        string live
        string git
        array tech
    }
    TECH {
	    string name
	    string docs
    }
```