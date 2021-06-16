package com.krishantha.rentacar.demoapplication;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

@Component
@Endpoint(id="stage")//Using these two annotation will expose this class as an jmx endpoint. and the Id is the name for we use in our actuator when we call.
public class StageEndpoint {
	
	Map<String,Stage> stages = new ConcurrentHashMap<>();
	
	@ReadOperation // the get call will come here
	public Map<String,Stage> getAllStages(){
		return stages;
	}
	
	@ReadOperation
	public Stage getStage(@Selector String name) {
		return stages.get(name);
	}
	//http://localhost:8080/actuator/stage/{name} to get a specific name
	
	@WriteOperation // Delete Operation can also be used here
	public void setValue(@Selector String name,int stage) {
		stages.put(name, new Stage(stage)); // Spring cannot configure complex objects, so we will passing the values as int and create the object in our java bean
	}
	
	static class Stage{
		int value;
		
		public Stage(int value) {
			this.value = value;
		}

		public int getValue() {
			return value;
		}

		public void setValue(int value) {
			this.value = value;
		}
		
		
	}
}
