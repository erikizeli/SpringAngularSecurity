package com.erik.security.config;

import com.erik.security.auth.UserRequest;
import com.erik.security.auth.UserResponse;
import com.erik.security.message.Message;
import com.erik.security.message.MessageRepository;
import com.erik.security.user.User;
import com.erik.security.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;
    private final MessageRepository messageRepository;

    public UserResponse getText(UserRequest request){
        User user = userRepository.findByEmail(request.getEmail());
        var map = user.getText();
        return UserResponse.builder().messageMap(map).build();
    }

    public void addText(UserRequest request){

        User user = userRepository.findByEmail(request.getEmail());
        Map<Integer, Message> messageMap = user.getText();
        var reqRole = request.getRole() + 1;
        Message message = messageMap.get(reqRole);
        var list = message.getText();
        list.add(request.getText());

        messageRepository.save(message);
        user.setText(messageMap);
        userRepository.save(user);
    }
}
