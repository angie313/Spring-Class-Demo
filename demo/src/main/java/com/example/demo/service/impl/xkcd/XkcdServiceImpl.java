package com.example.demo.service.impl.xkcd;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.domain.XkcdComic;
import com.example.demo.service.xkcd.XkcdService;

@Service
public class XkcdServiceImpl implements XkcdService {

    @Override
    public XkcdComic getCurrentComic() {
        RestTemplate restTemplate = new RestTemplate();
        XkcdComic result = restTemplate.getForObject("https://xkcd.com/info.0.json", XkcdComic.class);
        return result;
    }

    @Override
    public XkcdComic getPastComic(String comicNum) {
        RestTemplate restTemplate = new RestTemplate();
        XkcdComic result = restTemplate.getForObject("https://xkcd.com/" + comicNum + "/info.0.json",
                XkcdComic.class);
        return result;
    }

}
