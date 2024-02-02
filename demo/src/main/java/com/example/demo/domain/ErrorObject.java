package com.example.demo.domain;

import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorObject {
    private Integer status;
    private String path;
    private String errorMessage;
    private String timeStamp;

    public ErrorObject(int status, Map<String, Object> errorAttributes) {
        this.setStatus(status);
        this.setPath((String) errorAttributes.get("path"));
        this.setTimeStamp(errorAttributes.get("timestamp").toString());

        String msg = (String) errorAttributes.get("message");
        if(msg.contains("invalid field combination")){
            this.setErrorMessage("400 Bad Request: invalid combination of query parameters passed (e.g. 'start-date' cannot be used with 'date'; 'count' cannot be used with 'date' or 'start-date' and 'end-date', etc.)");
        } else {
            this.setErrorMessage(msg);
        }
    }
}
