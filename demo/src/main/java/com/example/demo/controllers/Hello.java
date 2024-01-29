package com.example.demo.controllers;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Greeting;

import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class Hello{

    @GetMapping("/hello")
    public String hello(){
        return "Hello World.";
    }

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
    
    @GetMapping("/greeting/{name}")
	public Greeting greetingPath(@PathVariable("name") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}
    
}