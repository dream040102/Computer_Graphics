#version 150 compatibility

uniform int segmentNum;

in float segmentIndex;

vec4 firstColor = vec4(0.0f, 0.0f, 0.0f, 1.0f);
vec4 finalColor = vec4(0.3f, 0.3f, 0.7f, 0.0f);

void main(){
	gl_FragColor = mix( firstColor, finalColor, segmentIndex/(segmentNum-1) );
}
