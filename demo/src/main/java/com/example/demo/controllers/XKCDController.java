package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.domain.XkcdComic;
import com.example.demo.service.xkcd.XkcdService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

// Controllers should be calling to a service or a html file

@RestController
@RequestMapping("xkcd")
public class XKCDController {

    @Autowired
    private XkcdService xkcdService;

    @GetMapping("/current")
    public XkcdComic xkcdComic() {
        return xkcdService.getCurrentComic();
    }

    @GetMapping("/past/{comicNumber}")
    public XkcdComic xkcdComicPast(@PathVariable("comicNumber") String comicNumber) {
        return xkcdService.getPastComic(comicNumber);
    }

}
