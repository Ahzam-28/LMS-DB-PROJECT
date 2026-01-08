from django.apps import AppConfig
import sys


class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

    def ready(self):
        """Clear sessions and auth tokens when the server starts.

        This helps ensure no user remains logged in across restarts.
        Skip during management commands like migrations or tests.
        """
        # Avoid running during manage.py migration/test commands
        skip_commands = {"makemigrations", "migrate", "collectstatic", "test"}
        if any(cmd in sys.argv for cmd in skip_commands):
            return

        # Ensure the database is ready and has tables before attempting deletes
        try:
            from django.db import connection
            table_names = connection.introspection.table_names()
        except Exception:
            # DB not ready yet
            print("[MainConfig] Database not ready; skipping session/token cleanup.")
            return

        # If migrations haven't been applied yet, avoid running cleanup
        if 'django_migrations' not in table_names:
            print("[MainConfig] Migrations table not found; skipping cleanup.")
            return

        try:
            # Clear Django sessions (if table exists)
            from django.contrib.sessions.models import Session
            deleted = Session.objects.all().delete()
            print(f"[MainConfig] Cleared sessions: {deleted}")
        except Exception as e:
            print(f"[MainConfig] Failed to clear sessions: {e}")

        try:
            # Clear DRF token auth tokens if used
            from rest_framework.authtoken.models import Token
            deleted = Token.objects.all().delete()
            print(f"[MainConfig] Cleared auth tokens: {deleted}")
        except Exception as e:
            print(f"[MainConfig] Failed to clear auth tokens: {e}")
