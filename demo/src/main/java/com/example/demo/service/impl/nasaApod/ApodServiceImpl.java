package com.example.demo.service.impl.nasaApod;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.domain.APODPicture;
import com.example.demo.service.nasa.ApodService;

import io.github.cdimascio.dotenv.Dotenv;

@Service
public class ApodServiceImpl implements ApodService {

    private final String APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod?api_key=" + getApiKey();

    private String getApiKey() {
        Dotenv dotenv = Dotenv.load();
        String nasaKey = dotenv.get("API_KEY");
        return nasaKey == null ? "DEMO_KEY" : nasaKey;
    }

    private String getEndpoint(String date, String startDate, String endDate, String count,
            boolean getThumbnail) {
        String endpoint = APOD_ENDPOINT;
        if (date != null)
            endpoint += "&date=" + date;
        if (getThumbnail)
            endpoint += "&thumbs=" + getThumbnail;
        if (count != null)
            endpoint += "&count=" + count;
        if (startDate != null)
            endpoint += "&start_date=" + startDate;
        if (endDate != null)
            endpoint += "&end_date=" + endDate;
        return endpoint;
    }

    @Override
    public List<APODPicture> getApodPictures(String date, String startDate, String endDate, String count,
            boolean getThumbnail) {

        RestTemplate restTemplate = new RestTemplate();
        List<APODPicture> pictures = new ArrayList<>();
        String endpoint = getEndpoint(date, startDate, endDate, count, getThumbnail);

        if (endpoint.contains("count")
                || endpoint.contains("start_date")
                || endpoint.contains("end_date")) {

            APODPicture[] picturesList = restTemplate.getForObject(endpoint, APODPicture[].class);
            pictures = Arrays.asList(picturesList);

        } else {
            APODPicture picture = restTemplate.getForObject(endpoint, APODPicture.class);
            pictures.add(picture);
        }

        return pictures;
    }
}
