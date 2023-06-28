package com.erik.security.auth;

import com.erik.security.message.Message;
import com.erik.security.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    private Map<Integer, Message> messageMap;
}
