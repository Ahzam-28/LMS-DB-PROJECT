from rest_framework import serializers
from .models import Teacher , Student , Course ,  CourseCategory , Enrollment , Lesson , Assignment , Submission , Quiz , Question , Answer , Result , Payment , Feedback , Resource , FileSubmission
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = '__all__'
class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'
class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'
class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'
class FileSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileSubmission
        fields = '__all__'

    
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=[('student', 'Student'), ('teacher', 'Teacher')])
    qualification = serializers.CharField(required=True)
    mobile_no = serializers.CharField(required=True)
    experience = serializers.IntegerField(required=False)
    interested_categories = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role', 'qualification', 'mobile_no', 'experience', 'interested_categories']

    def create(self, validated_data):
        role = validated_data.pop('role')
        password = validated_data.pop('password')
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        # Validate for role first 
        # BEfore creating user/student

        # Create user with hashed password
        user = User.objects.create_user(username=username, email=email, password=password)

        # Create the appropriate profile
        if role == 'student':
            Student.objects.create(
                user=user,
                qualification=validated_data.get('qualification', ''),
                mobile_no=validated_data.get('mobile_no', ''),
                interested_categories=validated_data.get('interested_categories', '')
            )
        elif role == 'teacher':
            Teacher.objects.create(
                user=user,
                qualification=validated_data.get('qualification', ''),
                mobile_no=validated_data.get('mobile_no', ''),
                experience=validated_data.get('experience', '')
            )

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")
