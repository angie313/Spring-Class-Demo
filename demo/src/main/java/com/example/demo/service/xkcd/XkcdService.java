package com.example.demo.service.xkcd;

import com.example.demo.domain.XkcdComic;

public interface XkcdService {

    XkcdComic getCurrentComic();

    XkcdComic getPastComic(String comicNum);

}