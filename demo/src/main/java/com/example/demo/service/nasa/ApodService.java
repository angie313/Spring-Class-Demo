package com.example.demo.service.nasa;

import java.util.List;

import com.example.demo.domain.APODPicture;

public interface ApodService {

    List<APODPicture> getApodPictures(String date, String startDate, String endDate, String count,
            boolean getThumbnail);

}
