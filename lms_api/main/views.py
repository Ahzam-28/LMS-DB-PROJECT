from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import AllowAny , IsAuthenticated

from .models import Teacher, Student , Course , CourseCategory , Enrollment , Lesson , Assignment , Submission , Quiz , Question , Answer , Result , Payment , Feedback , Resource , FileSubmission
from .serializers import TeacherSerializer, StudentSerializer , CourseSerializer , CourseCategorySerializer , EnrollmentSerializer , LessonSerializer , AssignmentSerializer , SubmissionSerializer , QuizSerializer , QuestionSerializer , AnswerSerializer , ResultSerializer , PaymentSerializer , FeedbackSerializer , ResourceSerializer , FileSubmissionSerializer , RegisterSerializer, LoginSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [IsAuthenticated]
    
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

class CourseCategoryViewSet(viewsets.ModelViewSet):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
class SubmissionViewSet(viewsets.ModelViewSet):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
class FileSubmissionViewSet(viewsets.ModelViewSet):
    queryset = FileSubmission.objects.all()
    serializer_class = FileSubmissionSerializer
 

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # creates User and profile
            token, _ = Token.objects.get_or_create(user=user)

            # Determine role and profile data
            if hasattr(user, 'student'):
                role = 'student'
                profile = user.student
                profile_data = {
                    "qualification": profile.qualification,
                    "mobile_no": profile.mobile_no,
                    "interested_categories": profile.interested_categories
                }
            elif hasattr(user, 'teacher'):
                role = 'teacher'
                profile = user.teacher
                profile_data = {
                    "qualification": profile.qualification,
                    "mobile_no": profile.mobile_no,
                    "address": profile.address
                }
            else:
                role = 'unknown'
                profile_data = {}

            return Response({
                "user_id": user.id,
                "username": user.username,
                "email": user.email,
                "role": role,
                "profile": profile_data,
                "token": token.key
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, _ = Token.objects.get_or_create(user=user)

            # Determine role and profile data
            if hasattr(user, 'student'):
                role = 'student'
                profile = user.student
                profile_data = {
                    "qualification": profile.qualification,
                    "mobile_no": profile.mobile_no,
                    "interested_categories": profile.interested_categories
                }
            elif hasattr(user, 'teacher'):
                role = 'teacher'
                profile = user.teacher
                profile_data = {
                    "qualification": profile.qualification,
                    "mobile_no": profile.mobile_no,
                    "address": profile.address
                }
            else:
                role = 'unknown'
                profile_data = {}

            return Response({
                "user_id": user.id,
                "username": user.username,
                "email": user.email,
                "role": role,
                "profile": profile_data,
                "token": token.key
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
