# Spring-Class-Demo
## NASA APOD (Picture of the Day) API Assignment
Endpoint: GET `/nasa/apod`
- Optional query params:
    - date (`YYYY-MM-DD` format)
    - thumbs (`True` or `False`)
    - count (positive integer)
    - start-date (`YYYY-MM-DD` format)
    - end-date (`YYYY-MM-DD` format)
### Examples
- No query params or query params other than the listed ones specified: `localhost:8080/nasa/apod` or `localhost:8080/nasa/apod?invalid-param=test` both return the picture for today 
- *Date* specified: `localhost:8080/nasa/apod?date=2023-12-25` return APOD for 2023-12-25 
- *count* specified: `localhost:8080/nasa/apod?count=10` returns a list of 10 randomly chosen APOD 
- *thumbs* specified: `localhost:8080/nasa/apod?thumbs=true` returns URL of video thumbnail if APOD is a video
- *start-date* and *end-date* specified: `localhost:8080/nasa/apod?start-date=2024-01-01&end-date=2024-01-10` returns a list of APOD from 2024-01-01 to 2024-01-10
### Limitations
- *date* must be on or after 1995-06-16, the first day an APOD picture was posted
- *date* cannot be a future day
- *count* cannot be greater than 100
- *count* cannot be used in conjunction with *date* or *start-date* and *end-date*
- *start-date* and *end-date* cannot be used in conjunction with *date*
- if *start-date* is specified as a date in the past without *end-date*, then *end-date* is default to the current date  
