package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    // @GetMapping(value = {"regex-to-exclude-routes-start-with-API"})

    // @GetMapping("/")
    @GetMapping(value = { "/", "/currentxkcdcomic", "/pastxkcdcomic" })
    public String index() {
        return "index";
    }

}
