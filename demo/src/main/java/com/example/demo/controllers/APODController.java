package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.domain.APODPicture;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class APODController {

    @GetMapping("/nasa-apod")
    public List<APODPicture> getAPOD(
                    @RequestParam(name="date", required=false) String date,
                    @RequestParam(name="start-date", required=false) String startDate,
                    @RequestParam(name="end-date", required=false) String endDate,
                    @RequestParam(name="count", required=false) String count,
                    @RequestParam(name="thumbs", required=false) boolean getThumbnail) {

        RestTemplate restTemplate = new RestTemplate();
        List<APODPicture> pictures = new ArrayList<>();
        String endpoint = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

        if(date != null) endpoint += "&date=" + date;
        if(getThumbnail) endpoint += "&thumbs=" + getThumbnail;
        if(count != null) endpoint += "&count=" + count;
        if(startDate != null) endpoint += "&start_date=" + startDate;
        if(endDate != null) endpoint += "&end_date=" + endDate;
        
        if(endpoint.contains("count") 
            || endpoint.contains("start_date")
            || endpoint.contains("end_date")){

            APODPicture[] picturesList = restTemplate.getForObject(endpoint, APODPicture[].class);
            pictures = Arrays.asList(picturesList);

        } else {
            APODPicture picture = restTemplate.getForObject(endpoint, APODPicture.class);
            pictures.add(picture);
        }
        
        return pictures;
    }
    
}
