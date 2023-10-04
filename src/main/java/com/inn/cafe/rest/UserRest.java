package com.inn.cafe.rest;

import com.inn.cafe.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@RequestMapping(value = "/user")
public interface UserRest {

    @PostMapping(path = "/signup")
    ResponseEntity<String> signUp(@RequestBody(required = true) Map<String, String> requestMap);

    @PostMapping(path = "/login")
    ResponseEntity<String> login(@RequestBody(required = true) Map<String, String> requestMap);

    @GetMapping(path = "/get")
    ResponseEntity<List<UserWrapper>> getAllUser();

    @PostMapping(path = "/update")
    ResponseEntity<String>update(@RequestBody(required = true)Map<String, String >requestMap);

    @GetMapping(path = "/checkToken")
    ResponseEntity<String> checkToken();

    @PostMapping(path = "/changePassword")
    ResponseEntity<String>changePassword(@RequestBody Map<String, String > requestMap);

    @PostMapping(path = "/forgotPassword")
    ResponseEntity<String> forgotPasswor(@RequestBody Map<String, String > requestMap);
}
