package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.APODPicture;
import com.example.demo.service.nasa.ApodService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("nasa")
public class APODController {

    @Autowired
    private ApodService apodService;

    @GetMapping("/apod")
    public List<APODPicture> getAPOD(
            @RequestParam(name = "date", required = false) String date,
            @RequestParam(name = "start-date", required = false) String startDate,
            @RequestParam(name = "end-date", required = false) String endDate,
            @RequestParam(name = "count", required = false) String count,
            @RequestParam(name = "thumbs", required = false) boolean getThumbnail) {

        return apodService.getApodPictures(date, startDate, endDate, count, getThumbnail);

    }

}
