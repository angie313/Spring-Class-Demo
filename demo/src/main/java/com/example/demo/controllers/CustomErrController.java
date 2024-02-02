package com.example.demo.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.example.demo.domain.ErrorObject;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class CustomErrController implements ErrorController {

    private static final String PATH = "/error";

    @Autowired
    private ErrorAttributes errorAttributes;

    @GetMapping(PATH)
    public ErrorObject error(WebRequest request, HttpServletResponse response) {
        return new ErrorObject(response.getStatus(), getErrorAttributes(request));
    }

    public void setErrorAttributes(ErrorAttributes errorAttributes) {
        this.errorAttributes = errorAttributes;
    }

    private Map<String, Object> getErrorAttributes(WebRequest request) {
        Map<String, Object> map = new HashMap<>();
        map.putAll(this.errorAttributes.getErrorAttributes(request, ErrorAttributeOptions.defaults().including(ErrorAttributeOptions.Include.MESSAGE)));
        return map;
    }
}
